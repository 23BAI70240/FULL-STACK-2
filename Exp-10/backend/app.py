from flask import Flask, request, jsonify, redirect
from flask_cors import CORS
from flask_mail import Mail, Message
from itsdangerous import URLSafeTimedSerializer

from utils.recommender import recommend, get_by_genre, get_top_movies

# ------------------ APP SETUP ------------------
app = Flask(__name__)
CORS(app)

# ------------------ MAIL CONFIG ------------------
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USERNAME'] = 'jayaprakashreddydharmana@gmail.com'
app.config['MAIL_PASSWORD'] = 'levj jpjw oavk xqcv'  # NO SPACES

mail = Mail(app)

# ------------------ TOKEN SERIALIZER ------------------
serializer = URLSafeTimedSerializer("secret-key")

# ------------------ TEMP STORAGE ------------------
# NOTE: This resets when server restarts (we'll replace with DB later)
verified_users = set()

# ------------------ BASIC ROUTES ------------------
@app.route('/')
def home():
    return jsonify({"message": "Netflix Recommender API running"})


@app.route('/test-mail')
def test_mail():
    msg = Message(
        subject="Test Mail",
        sender=app.config['MAIL_USERNAME'],
        recipients=[app.config['jayaprakashreddydharmana@gmail.com']]
    )
    msg.body = "This is a test email"
    mail.send(msg)
    return "Mail sent"


# ------------------ RECOMMENDER ROUTES ------------------
@app.route('/recommend', methods=['GET'])
def recommend_api():
    title = request.args.get('title')
    return jsonify(recommend(title))


@app.route('/genre', methods=['GET'])
def genre_api():
    genre = request.args.get('name')
    return jsonify(get_by_genre(genre))


@app.route('/top', methods=['GET'])
def top_api():
    return jsonify(get_top_movies())


# ------------------ AUTH ROUTES ------------------

# 🔐 SIGNUP → SEND EMAIL
@app.route('/signup', methods=['POST'])
def signup():
    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({"error": "Email required"}), 400

    token = serializer.dumps(email, salt='email-confirm')

    link = f"http://localhost:3000/verify/{token}"

    msg = Message(
        subject="Verify your Netflix Clone Account",
        sender=app.config['MAIL_USERNAME'],
        recipients=[email]
    )

    msg.body = f"""
Welcome!

Click the link below to verify your account:

{link}

This link will expire in 10 minutes.
"""

    mail.send(msg)

    return jsonify({"message": "Verification email sent"})


# 🔓 VERIFY EMAIL
@app.route('/verify/<token>', methods=['GET'])
def verify(token):
    try:
        email = serializer.loads(token, salt='email-confirm', max_age=600)

        verified_users.add(email)  # ✅ store verified user

        # redirect to frontend login page
        return redirect("http://localhost:3000/")

    except Exception as e:
        return jsonify({"error": "Invalid or expired link"}), 400


# 🔑 LOGIN
@app.route('/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')

    if not email:
        return jsonify({"success": False, "message": "Email required"}), 400

    if email in verified_users:
        return jsonify({"success": True})
    else:
        return jsonify({
            "success": False,
            "message": "Email not verified. Please check your email."
        })


# ------------------ RUN ------------------
if __name__ == "__main__":
    app.run(debug=True)
import pandas as pd

# Load data (relative to backend folder)
df = pd.read_pickle("model/movies.pkl")
final_sim = pd.read_pickle("model/similarity.pkl")
indices = pd.read_pickle("model/indices.pkl")

def recommend(title, top_n=10):
    if not title:
        return ["No title provided"]

    title = title.lower()

    if title not in indices:
        return ["Movie not found"]

    idx = indices[title]

    scores = list(enumerate(final_sim[idx]))
    scores = sorted(scores, key=lambda x: x[1], reverse=True)[1:top_n+1]

    return [df.iloc[i[0]]['title'] for i in scores]


def get_by_genre(genre, top_n=20):
    if not genre:
        return []

    filtered = df[df['genres'].str.contains(genre, case=False, na=False)]

    # optional: sort by rating if exists
    if 'vote_average' in df.columns:
        filtered = filtered.sort_values(by='vote_average', ascending=False)

    return filtered['title'].head(top_n).tolist()


def get_top_movies(top_n=10):
    if 'vote_average' in df.columns:
        top = df.sort_values(by='vote_average', ascending=False)
        return top['title'].head(top_n).tolist()

    return df['title'].head(top_n).tolist()
import MeCab
import random
from flask import Flask, jsonify, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/api/anaume", methods=["POST"])
def api_anaume():
    result = ""
    for i in range(int(request.form["make_count"])):
        result += anaume(request.form["text"]) + "\n"

    return jsonify({"text": request.form["text"], "result": result})

def anaume(text: str):
    tagger = MeCab.Tagger()
    splitted = tagger.parse(text)

    words = []
    for word in splitted.split("\n"):
        if len(word.split()) > 2:
            words.append(word.split())

    anaumed = ""
    for word in words:
        if len(word) > 4:
            if "名詞" in word[4]:
                if random.choice([True, False]):
                    spoiler = ""
                    for i in range(len(word[0])):
                        spoiler += "○"
                    anaumed += spoiler
                else:
                    anaumed += word[0]
            else:
                anaumed += word[0]
        else:
            anaumed += word[0]

    return anaumed

if __name__ == "__main__":
    app.run(debug=True)
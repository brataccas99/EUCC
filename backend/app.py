from flask import Flask, request, jsonify
import llama2

app = Flask(__name__)


@app.route("/", methods=["GET"])
def index():
    return "Welcome to my app!"


@app.route("/pdf", methods=["POST"])
def process_pdf():
    # Get the uploaded PDF file from the request
    pdf_file = request.files["pdf"]

    # Use the Llama2 library to check the PDF file for compliance with EU rules and requirements
    result = llama2.check(pdf_file)

    # Return the result as JSON data
    return jsonify({"compliant": result})


if __name__ == "__main__":
    app.run()

from flask import Flask, request, jsonify
from pymongo import MongoClient

app = Flask(__name__)
client = MongoClient(mongodb+srv://sparta:test@cluster0.iz28de0.mongodb.net/?retryWrites=true&w=majority)#TODO db주소 입력해야함

@ app.route('/resume', methods=['POST'])
def save_resume():
    resume_data = request.json
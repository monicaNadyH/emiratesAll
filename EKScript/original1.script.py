import pandas as pd
import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1, NaturalLanguageClassifierV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, SentimentOptions

id_p = 'f7e6f0x306-nlc-253'
id_s = 'f7e51ax305-nlc-220'

nlu = NaturalLanguageUnderstandingV1(
    version='2017-02-27',
    username='3c503737-b060-41e9-87cb-c9be7db24864',
    password='pfslBiVDNe1P')

nlc_p = NaturalLanguageClassifierV1(
    username='33f282fa-8b5b-4c40-bf39-89c83c60f2ec',
    password='bxbyoVgpHL3K')

nlc_s = NaturalLanguageClassifierV1(
    username='97d5a4f1-1197-4cf5-99c6-4d02feb16319',
    password='kyeIBK5eJmUW')

print('reading...')
data = pd.read_csv('test.csv')

def sentiment(text):
    try:
        response = nlu.analyze(
            text=text,
            features=Features(sentiment=SentimentOptions()))
        
        sentiment = json.dumps(response['sentiment']['document']['label'])
    except Exception as e:
        print(e)
        sentiment = "No Enough Text"

    return sentiment.strip('"')

def classifyP(text):
    classes = nlc_p.classify(id_p, text)
    c = json.dumps(classes['classes'][0]['class_name'])
    return c.strip('"')

def classifySub(text):
    classes = nlc_s.classify(id_s, text)
    c = json.dumps(classes['classes'][0]['class_name'])
    return c.strip('"')

def confidence(text):
    classes = nlc_p.classify(id_p, text)
    c = json.dumps(classes['classes'][0]['confidence'])
    return c

print('nlu...')
data['sentiment'] = data.apply(lambda row: sentiment(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv')

print('nlc primary...')
data['PCategory'] = data.apply(lambda row: classifyP(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv')

print('nlc secondary...')
data['SubCategory'] = data.apply(lambda row: classifySub(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv')

print('confidence...')
data['confidence'] = data.apply(lambda row: confidence(row['description']), axis=1)

print('saving...')
data.to_csv('results.csv')


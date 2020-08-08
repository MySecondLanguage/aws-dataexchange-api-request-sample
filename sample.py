import boto3

client = boto3.client('dataexchange')

# more details can be found here : https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dataexchange.html

response = client.get_data_set(
    DataSetId='<Data set id Goes there>'
)

print(response)
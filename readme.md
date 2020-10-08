### Note:
Before you run script, please make sure you have update Dataset id in the script file
 

# Very simple script for aws DataExchange API in python and nodejs only

## If you in Python

install boto3 (aws sdk)

```
`pip install boto3
```


## If you in NodeJS

install aws sdk:

```
npm i aws-sdk
```

### and then set the credentails of aws (Your IAM)

nodejs and python or dotnet, configurgation is same.

If you are on Linux/unix.

put this credentails following location: I have added example file here

`/home/USERNAME/.aws/credentials`

```
[default]
aws_access_key_id = <Your aws access Key> 
aws_secret_access_key = <Your aws secret key>
```

and set region, for example, my aws instance is in california,

so i will put the region here like this way:

`/home/USERNAME/.aws/config`

```
[default]
region=us-east-1

```

then run the code from your terminal if you in python:

`python3 sample.py`

if you are in nodejs:

`node sample.js`

If you configuration is ok, it shold retrun you a json response.


# Windows ?

on windwos, only configration is dffierent but all those commands are same.

### configure your credentials and config in windows:



`C:\Users\USERNAME\.aws\credentials`

```
[default]
aws_access_key_id = <Your aws access Key> 
aws_secret_access_key = <Your aws secret key>
```

and set region, for example, my aws instance is in california,

so i will put the region here like this way:

`C:\Users\USERNAME\.aws\config`

```
[default]
region=us-east-1

```

Still doubt in configuration?
Follow this please: https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/setup-credentials.html



# Optional

As i have only writen the script very basic to fetch data, here i only used only methon to fetch info for aws data exchange.

If you want to get more usefull method infomation:

Please follow these:

Python: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/dataexchange.html

nodejs: https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DataExchange.html

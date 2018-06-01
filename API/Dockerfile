FROM python:2.7         
ADD . /emotion-api
WORKDIR /emotion-api

ENV PATH /root/torch/install/bin:$PATH
ENV PATH /root/torch/install/bin:$PATH
RUN pip install -r requirements.txt
ENTRYPOINT ["python", "annotation.py"]

#docker cp ~/torch emotion-api:/root/torch


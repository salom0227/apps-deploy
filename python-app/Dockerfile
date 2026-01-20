FROM python:3.11-alpine
WORKDIR /app
RUN pip install flask
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]

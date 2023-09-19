
# FinSight
- Clone repository :
  	```sh
  git clone https://github.com/Anhduchb01/FinSight.git
  	```
    ```sh
  cd FinSight
	```
- Structure Project :
```sh
📦 FinSight
 ┣ 📂 frondEnd
 ┃ ┗ 📜 ...
 ┣ 📂 backEnd
 ┃ ┣ 📂 FinSight
 ┃    ┣ 📜 server.js
 ┃    ┗ 📜 ...
 ┃ ┣ 📂 FinSightAI
 ┃    ┣ 📜 app.py
 ┃    ┗ 📜 ...
 ┗ 📜 README.md
```
 
## Run BackEnd
```sh
cd  backEnd
```
### Run BackEnd Nodejs ( FinSight )
```sh
cd  FinSight
```
- install package :
	```sh
	npm install
	```
- run nodejs server:
  	```sh
	npm start
	```

### Run BackEnd Python ( FinSightAI )
```sh
cd  FinSightAI
```
#### Tạo môi trường env
- **Dùng Conda** 
  - Tạo môi trường :
  ```sh
  conda create -n env python==3.9.16
  ```
  - Activate môi trường :
  ```sh
  conda activate env
  ```
  - Install thư viện :
  ```sh
  pip install -r requirements.txt
  ```
- **Dùng venv** 
  - Tạo môi trường :
  ```sh
  python3 -m venv env
  ```
  - Activate môi trường :
  
  *Window*
  ```sh
  env\Scripts\activate.bat
  ```
  *Linux*
  ```sh
  source env/bin/activate
  ```
  - Install thư viện :
  ```sh
  pip install -r requirements.txt
  ```
#### Run app
```sh
python app.y
```

## Run FrondEnd
```sh
cd frondEnd
```

- install package :
	```sh
	npm install
	```
- run nuxtjs frondend :
  	```sh
	npm run dev 
	```
## Brower show on localhost:3000

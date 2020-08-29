# Docker Karsa Sharing

Repository ini adalah bagian dari demo kegiatan Karsa Sharing #3 pengenalan aplikasi service berbasis kontainer

## Requirements
1. Linux
2. Docker Engine
3. Docker CLI
4. Docker Compose
5. Docker Machine

## Step by Step
1. Instal Docker Tools
2. Create Dockerfile
3. Build Image
  ```bash
  docker build -t [image_name:tag] .
  ```
4. Run Container
  ```bash
  docker run --name [container_name] -p [expose_port] [image_name:tag]
  ```
5. Container with Compose File  
   Create file `docker-compose.yaml`
   ```
   version: '3.1'
      services:
      node_app:
        image: karsa/docker:v1
        ports:
          - '0.0.0.0:3000:3000'
   ```
6. Run Docker-Compose 
   ```
   docker-compose up -d
   ```
7. Simple Versioning

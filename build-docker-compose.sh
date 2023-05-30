#!/bin/bash
# Has to be defined in env AWS_IMAGE_TAG and AWS_IMAGE_DEMO_APP
rm -f docker-compose-cicd.yml
envsubst < "docker-compose-template-cicd.yml" > "docker-compose-cicd.yml"
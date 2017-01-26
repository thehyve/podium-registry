FROM openjdk:8-jdk-alpine

# Add podium-registry source
ADD . /code/

# Add OpenSSH, package the application and delete all lib
RUN apk update && apk add openssh && \
    cd /code/ && \
    rm -Rf target && \
    chmod +x /code/mvnw && \
    sleep 1 && \
    ./mvnw package && \
    mv /code/target/*.war /podium-registry.war && \
    rm -Rf /code/ /root/.m2/wrapper/ /root/.m2/repository/ /var/cache/apk/*

EXPOSE 8761
VOLUME /tmp

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    SPRING_PROFILES_ACTIVE=prod,native \
    GIT_URI=https://github.com/podium/podium-registry/ \
    GIT_SEARCH_PATHS=central-config

CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/podium-registry.war","--spring.cloud.config.server.git.uri=${GIT_URI}","--spring.cloud.config.server.git.search-paths=${GIT_SEARCH_PATHS}"]

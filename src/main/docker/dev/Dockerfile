FROM openjdk:8-jre-alpine

# Add directly the war
ADD *.war /podium-registry.war

# Add OpenSSH
RUN apk update && apk add openssh && rm -rf /var/cache/apk/*

EXPOSE 8761
VOLUME /tmp

ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    SPRING_PROFILES_ACTIVE=prod,native \
    GIT_URI=https://github.com/thehyve/podium-registry/ \
    GIT_SEARCH_PATHS=central-config

CMD ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/podium-registry.war","--spring.cloud.config.server.git.uri=${GIT_URI}","--spring.cloud.config.server.git.search-paths=${GIT_SEARCH_PATHS}"]

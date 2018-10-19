# Podium Registry


Podium Registry is a runtime application on which all applications registers and get their 
configuration from also provides runtime monitoring dashboards. 

Podium Registry is built based on JHipster registry (http://www.jhipster.tech/jhipster-registry)



For production instances, please set the following settings
in a file `registry-config.yml`:

```yaml
podium:
    security:
        authentication:
            jwt:
                secret: change-me-in-production
security:
    user:
        password: change-admin-password-in-production
```
Start the registry with:
```bash
java -jar -server -Djava.awt.headless=true -Xms200m -Xmx200m  -Dspring.profiles.active=prod -Djava.security.egd=file:///dev/urandom -Dspring.config.location=registry-config.yml /home/podium/podium-registry.war
```

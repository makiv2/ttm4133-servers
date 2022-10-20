# Service for fileserver and webapp

1. Move to proper directory
``mv fileserver.service /etc/systemd/system/fileserver.service``
``mv webserver.service /etc/systemd/system/webserver.service``

2. Reload the service files to include the new service.
``sudo systemctl daemon-reload``

3. Start the services
``sudo systemctl start fileserver.service``
``sudo systemctl start webserver.service``

4. To check the status of a service
``sudo systemctl status example.service``

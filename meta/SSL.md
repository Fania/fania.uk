# Let's Encrypt & certbot 


## installation

Debian Jessie 8
Nginx

wget https://dl.eff.org/certbot-auto
chmod a+x certbot-auto

https://certbot.eff.org/lets-encrypt/debianjessie-nginx



version of certbot-auto:
0.33.1


check certificates:
`/etc/certbot-auto certificates`



renew certificates test:
`sudo /etc/certbot-auto renew --dry-run`


check crontab:
`crontab -l`

edit crontab:
`crontab -e`


certbot logs:
`nano /var/log/letsencrypt/letsencrypt.log`






<!-- 0 */12 * * * root test -x /usr/bin/certbot -a \! -d /run/systemd/system && perl -e 'sleep int(rand(3600))' && certbot renew --pre-hook "service nginx stop" --post-hook "service nginx start" -->


0 0,12 * * * python -c 'import random; import time; time.sleep(random.random() * 3600)' && /etc/certbot-auto renew --pre-hook "service nginx stop" --post-hook "service nginx start"


[crontab help](https://crontab.guru/#*/5_*_*_*_*)




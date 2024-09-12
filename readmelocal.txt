
git clone git@github.com:JamsheedAliU/adobe-storefront.git

ssh-keygen -t ed25519 -C "jamsheed@corra.com"


open ~/.ssh/config  

Host bitbucket.org
AddKeysToAgent yes
IdentityFile ~/.ssh/id_rsa

// add following below

Host github.com
AddKeysToAgent yes
IdentityFile ~/.ssh/id_ed25519


The key fingerprint is:
SHA256:b9W87vyAup0jZEZG6ZPNopc99o/qKoLBivH5kKWdFoQ jamsheed@corra.com

New SSH key for github.com
'ssh-rsa', 'SHA256:HzzDtY2E92VzRm8TKjzgzNazhd6sXS8vCr8cPReljUk', 'jamsheed@corra.com'

To add the SSH Key
ssh-add ~/.ssh/id_ed25519

To copy the SSH Key
cat < ~/.ssh/id_ed25519.pub

SSH key add in Github portal- 
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIHj06mzdhxsDZ0XGSjt9UHgMLPFG1kOvThvLmXOuFWet jamsheed@corra.com


ssh-keygen -t ed25519-sk -C "jamsheed@corra.com"
ssh-keygen -t ecdsa-sk -C "jamsheed@corra.com"

npm install
npm start
## Initial setup

Because this is the "initial setup", it typically requires a keyboard and monitor, however, there are headless options.

1. Change password using `passwd`
1. Ensure everything is up to date using `sudo apt-get update && sudo apt-get upgrade`
1. Install Kernel Headers for native compiling `sudo apt install raspberrypi-kernel-headers`
1. Enable ssh using `sudo systemctl enable ssh` and then `sudo systemctl start ssh`
   1. Test SSH to make sure it is working properly
   
## From SSH shell   
   
1. Install Node 
   1. `curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`
   1. `sudo apt-get install nodejs`
1. Install git 
   1. `sudo apt-get install git`
1. Install pigpio **(this is important)**
   1. `sudo apt-get install pigpio`
1. Install Dart SDK
   1. `wget https://storage.googleapis.com/dart-archive/channels/stable/release/2.8.4/sdk/dartsdk-linux-arm-release.zip`
   1. `mv dart-sdk /usr/lib/dart`
1. Install dart-sass   

## Checkout the project

1. Create Code directory
1. Checkout code using git
   1. `git clone https://github.com/jrgleason/pi-serial-example`

## Build the project

1. CD into `~/Code/pi-serial-example`
1. Build the project
   1. `npm install && npm run build`
1. Start the application and confirm it is running
   1. `npm start`      
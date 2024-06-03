### USAGE
# 1. open bash
# 2. run => bash auto.sh {module_name}

name=$1

echo "creating module..."
nest g module ${name}

echo "creating service..."
nest g service ${name}

echo "creating controller..."
nest g controller ${name}

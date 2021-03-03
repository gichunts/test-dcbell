# dcbel-new-platform-backend

## Running

- Open a terminal and execute the following code:

```
cd backend/
sls invoke -f functionName
```

## Deploying

### Setup

- Open a terminal and execute the following code:

```
export AZURE_SUBSCRIPTION_ID=''
export AZURE_TENANT_ID=''
export AZURE_CLIENT_ID=''
export AZURE_CLIENT_SECRET=''
```

### Development environment

- Open a terminal and execute the following code:

```
cd backend/
yarn development
```

### Production environment

- Open a terminal and execute the following code:

```
cd backend/
yarn production
```

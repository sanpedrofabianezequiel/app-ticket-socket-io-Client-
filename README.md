# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Learn More

- You can learn more in the [Ant design documentation](https://ant.design/docs/react/introduce).

- You can learn more in the [React router documentation](https://reactrouter.com/docs/en/v6).

- You can learn more in the [desgin icon documentation](https://ant.design/components/icon/).


     if(usuario.escritorio && usuario.agente){ //Necesitamos utulizar el Return
         return <Redirect to='/escritorio' />
     }

# Problem with your CORS CHECK THAT
  const socket =  useMemo(() => io.connect(serverPath,{
        transports:['websocket']
    }) , [serverPath]);
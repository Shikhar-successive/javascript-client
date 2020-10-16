# **HOW A REQUEST GET SERVED ?**

> ### For a request to be served we should know the following terms :-
> - ***Client*** - End user who makes the request. In technical terms it is the app/browser which is used to access a particular service.
> - ***Server*** - It is basically a computer which has all the funtionality that are requested by a client.

## How Request are made ?
It can be best explained by an example. Suppose you want to buy a pair of shoes from Amazon, so the very first thing you will do is open the Amazon app *(provided that app is already installed on your device)*. Now you want adidas shoes, so you will type adidas shoes on the search bar and you will see various adidas shoes as soon as the search is over.
Now what really happend is that the text that you entered in search box *"adidas shoes"* was taken by the app and was send to the server of Amazon where the data about shoes was stored. As a result the app on your device made a request to the server to provide you with data that you desire to see. Here you (**Your Amazon account on the App**) are a 'Client' who is requsting for the service from the server.

![](https://miro.medium.com/max/607/1*-ka3Jra8u5M-PfqQ7Q9iTg.png)


## How Request get served ?
After the above events when a server recieves a request from a client, it performs the necessary actions. In our case the server will look at the request and provide the requested data. Here the server will look for all the adidas shoes that was mentioned. The data will be send to your app and will be showed in the app. In this way the request from client to search adidas shoes is served by the server.

The above explanation is very basic just to convey the fundamentals of request-response. Many things can lie in between a client and server like **firewall** (*to filter the requests*) and **API** (*software intermediary that allows two applications to talk to each other*). The client may make a **GET-REQUEST** or a **POST-REQUEST**. 

![](https://www.c-sharpcorner.com/UploadFile/deveshomar/debugging-http-requests-and-http-response/Images/Client-Serve-Request-Response-diagram.jpg)
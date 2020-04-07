# MVC Architecture

The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the `model`, the `view`, and the `controller`. Each of these components are built to handle specific development aspects of an application.

- **`Model`** = Manages the data of an application.

  Model is where the application’s data objects are stored. The model doesn’t know anything about views and controllers. When a model changes, typically it will notify its observers that a change has occurred.

- **`View`** = A visual representation of the data from model displayed to user.

  View is what's presented to the users and how users interact with the app. 

- **`Controller`** - Links the user and the system by connecting the model and the view.

  The controller is the decision maker and the glue between the model and view. The controller updates the view when the model changes. It also adds event listeners to the view and updates the model when the user manipulates the view.

The model never touches the view. The view never touches the model. The controller connects them.

MVC pattern brings modularity to application developers and it enables = 

- Reusable and extendable code.
- Separation of view logic from business logic.
- Allow simultaneous work between developers who are responsible for different components (such as UI layer and core logic).
- Easier to maintain.

![mvc](./assets/mvc.jpg "mvc")


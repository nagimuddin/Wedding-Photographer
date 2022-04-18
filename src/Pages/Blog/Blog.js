import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <section>
      <div className="container">
        <div className="blog-details">
          <h2>Diffrent between Authorizetion and Authentication?</h2>
          <p>
            authentication is the system of verifying who someone is. And
            authorization is the process of verifying what specific
            applications, files, and data a user want to access. Authentication
            confirms who the user is. Authorization regulate what resources a
            user can ingress. Authentication is the first tread of a good
            recognition and access management process. Authorization all the
            time takes place after authentication. Authentication is evident to
            and incompletely changeable by the user. Authorization is imvisible
            to or unchangeable by the user.
          </p>
          <h2>
            Why using firebase,What other options do you have to impliment
            authentication?
          </h2>
          <p>
            Google Firebase offers to many features, it is one of the best
            backend development tool for web and mobile apps. It decrease
            development workload and time. And it's a complete prototyping tool.
            It is simple, shallow, friendly, and commercially recognized. <br />{" "}
            We can use another platfrom alternetives of firebase for authentication. there are top
            10 alternetives of firebase 1.Back4App, 2.Parse, 3. AWS Amplify, 4.
            Backendless, 5. Kuxxle, 6. Supabase, 7.appwrite, 8.Hasura, 9. Nhost,
            and 10.Deployd.{" "}
          </p>
          <h2>
            What other services does firebase provide without authentication?
          </h2>
          <p>
            There are many services which are provides Firebase without
            authentication, Most useful of them are: Cloud Firestore. Cloud
            Functions. Authentication. Hosting. Cloud Storage. Google Analytics.
            Predictions. Cloud Messaging.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;

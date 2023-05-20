import React from 'react';
import pageTitle from '../pageTitle/pageTitle';

const Blog = () => {

    pageTitle('Blogs')
    return (
        <div>

            <h1 className='text-3xl'>Frequently Asked Questions!!!</h1>
            <br />
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </div>
                <div className="collapse-content">
                    <p>
                        Access token is a credential to let the user access a protected site upon authentication or authorization.
                        Refresh token is a token is used to obtain a new access token without the requirement of the user to authenticate.

                        Access tokens exists for short duration and provide limited access where as refresh tokens exits for longer duration and used to request new access tokens when they expire. Refresh tokens are stored in the client side and sent to the server when required.
                    </p>
                </div>

            </div>

<br />
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                Compare SQL and NoSQL databases?
                </div>
                <div className="collapse-content">
                    <p>
                    SQL stands for Structured Query Language, and SQL databases are also known as relational databases. They are based on a structured approach to storing and managing data. SQL queries can be used to insert, retrieve, update, and delete data from the database.

                       <br />
                       <br />
                       NoSQL stands for "Not Only SQL," and these databases have a more flexible and dynamic approach to data storage.  NoSQL database is like a big container where data can be stored without worrying about organizing them in a specific way.NoSQL databases are often used in scenarios where flexibility, scalability, and high-speed data retrieval are crucial, such as big data applications, real-time analytics, and content management systems.
                        </p>
                </div>

            </div>

<br />

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is express js? What is Nest JS ?
                </div>
                <div className="collapse-content">
                    <p>
                    Express.js is a popular web application framework for Node.js. It simplifies the process of building web applications and APIs by providing a set of features and utilities. It offers routing, middleware support, template engines, and integrates well with other modules and databases.
                        <br />
                        <br />

                        NestJS is a web development framework for building server-side applications using JavaScript or TypeScript.  It's inspired by Angular, offers modularity, dependency injection, and API/microservice support. It helps developers write organized, scalable, and maintainable code by providing a modular architecture and a range of features commonly used in server-side development.
                        </p>
                </div>

            </div>
<br />

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                What is MongoDB aggregate and how does it work ?
                </div>
                <div className="collapse-content">
                    <p>
                    MongoDB Aggregate is a powerful feature that let users analyze and process data in MongoDB. It works with collections of documents and allows users to perform tasks like grouping, filtering, sorting, and transforming data. It uses a pipeline-based approach where multiple stages can be combined as a chain together to create a sequence of data processing steps. With MongoDB Aggregate, users can efficiently aggregate and summarize data, enabling advanced querying and data analysis.
                        
                        
                        </p>
                </div>

            </div>
        </div>
    );
};

export default Blog;
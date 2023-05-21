import useTitle from '../hooks/useTitle';
import './Blogs.css'

const Blog = () => {
    // useTitle = 'Blog'

    return (
        <div>
            <h1 className='text-center font-bold mb-3 text-blue-600'>Blogs</h1>
            <div className='blog'>
                <h3 className='font-semibold'>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>

                <p><span className='underline'>Access Token</span>: An access token is a credential that is used to access protected resources or perform actions on behalf of a user or an application. Access tokens provide a level of security by allowing access to specific resources only to authenticated and authorized users or applications.</p>
                <p><span className='underline'>Refresh Token</span>:  A refresh token is a long-lived credential that is used to obtain a new access token after the previous access token has expired. Refresh tokens are securely stored on the client-side and are exchanged with the authentication server for a new access token when needed.</p>
                <p>Access tokens are used to authenticate and authorize client requests to server resources. They are short-lived and contain user information and permissions. Refresh tokens are used to obtain new access tokens without re-authenticating.
                    On the client-side, access tokens can be stored in memory or secure HTTP-only cookies, while refresh tokens should be stored securely in HTTP-only cookies or secure storage mechanisms. Ensure proper security measures are in place to protect tokens.</p>
            </div>
            <div className='blog'>
                <h3 className='font-semibold'>Compare SQL and NoSQL databases</h3>
                <p><span className='underline'>SQL</span>: Structured, predefined schema, SQL query language, vertical scalability, well-suited for structured data and complex transactions.</p>
                <p><span className='underline'>NoSQL</span>: Flexible, schema-less, model-specific query languages, horizontal scalability, handles large volumes and high traffic loads, schema flexibility for evolving data.</p>
                <p>SQL is structured with predefined schemas and SQL queries, while NoSQL is flexible with model-specific queries, scalable horizontally, and suitable for handling large volumes and dynamic data.</p>
            </div>
            <div className='blog'>
                <h3 className='font-semibold'>What is express js? What is Nest JS?</h3>
                <p><span className='underline'>Express.js</span>Express.js is a fast and minimalist web application framework for Node.js. It provides a robust set of features for building web applications and APIs, including routing, middleware, request handling, and views rendering. Express.js simplifies the process of creating server-side applications by providing a lightweight and intuitive framework with a modular design.</p>
                <p><span className='underline'>Nest JS</span>: Nest.js is a progressive Node.js framework for building efficient and scalable server-side applications. It is designed to make the development of server-side applications more structured, modular, and maintainable. Nest.js combines elements of object-oriented programming (OOP), functional programming, and reactive programming to provide a robust and flexible framework for building server-side applications.</p>
            </div>
            <div className='blog'>
                <h3 className='font-semibold'>What is MongoDB aggregate and how does it work?</h3>
                <p>In MongoDB, the aggregate function is used to perform advanced data processing and aggregation operations on collections. It allows you to analyze, transform, and manipulate data in a flexible and powerful way. The aggregate operation takes an array of stages as input, where each stage represents a specific data processing step.</p>
                <p> It works by constructing a pipeline of stages, each performing a specific operation on the data. These stages can include filtering, grouping, sorting, projecting, and more. The data flows through the pipeline, and the final result is returned based on the applied stages. It's a powerful tool for performing complex computations and deriving meaningful insights from your data directly within the database.</p>
            </div>
        </div>
    );
};

export default Blog;
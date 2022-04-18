import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
          <div className='row text-center p-5'>
              <div className='col-ms-12 col-md-6'>
                  <h2>Authentication</h2>
                 <p>ব্যবহারকারী কে তা যাচাই করে</p>
                 <p>পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা  তথ্যের মাধ্যমে  কাজ করে</p>
                 <p> identify একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ।</p>
              </div>
              <div className='col-ms-12 col-md-6'>
                  <h2>Authorization</h2>
                 <p>permission নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে</p>
                 <p>অনুমোদন ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়</p>
                 <p>অনুমোদন সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থার দ্বারা বাস্তবায়িত </p>
              </div>

          </div>

          <div className='row'>
             
              <div className='col-sm-12 col-md-6'>
              <h1>Why  we are  using firebase</h1>
                   <p> Firebase is a complete package of products that allows to build web and mobile apps, improve the app quality and help your clients grow their business
                   But, soon after Google acquired Firebase, it gained its popularity back with the help of increased number of features and functionalities.
                   </p>
              </div>
              <div className='col-sm-12 col-md-6'>
                  <h1> other services does firebase</h1>
              Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become a key component of Google’s mobile strategy. I was a Firebase  in the past, but my concerns about its complexity and cost led me to explore other cloud alternatives.
              </div>

          </div>
             
            
        </div>
    );
};

export default Blogs;
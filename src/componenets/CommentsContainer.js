import React from 'react'

const commentsData= [
  {
    name: " Dinesh Bendre",
    text: "Hello guys how are you",
    replies:[
      {
        name: " Dinesh Bendre",
        text: "Hello guys how are you",
        replies:[
          {
            name: " Dinesh Bendre",
            text: "Hello guys how are you",
            replies:[
              
            ]
          },
        ]
      },
    ]
  },
  {
    name: " Dinesh Bendre",
    text: "Hello guys how are you",
    replies:[
      {
        name: " Dinesh Bendre",
        text: "Hello guys how are you",
        replies:[
          {
            name: " Dinesh Bendre",
            text: "Hello guys how are you",
            replies:[
              {
                name: " Dinesh Bendre",
                text: "Hello guys how are you",
                replies:[
                  
                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: " Dinesh Bendre",
    text: "Hello guys how are you",
    replies:[
      {
        name: " Dinesh Bendre",
        text: "Hello guys how are you",
        replies:[
          
        ]
      },
    ]
  },
  {
    name: " Dinesh Bendre",
    text: "Hello guys how are you",
    replies:[
      
    ]
  },
  {
    name: " Dinesh Bendre",
    text: "Hello guys how are you",
    replies:[
      {
        name: " Dinesh Bendre",
        text: "Hello guys how are you",
        replies:[
          {
            name: " Dinesh Bendre",
            text: "Hello guys how are you",
            replies:[
              
            ]
          },
        ]
      },
    ]
  },
  {
  name: " Dinesh Bendre",
  text: "Hello guys how are you",
  replies:[
    
  ]
}
  
];

const Comment=({data})=>{
  const{name,text,replies}=data;
  return <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'>
    <img className='w-7 h-7' alt='user' src='https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'></img>
    <div className='px-3'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
    </div>
    </div>;
}

const CommentsList=({comments})=>{
  return comments.map((comment,index)=>(
  <div key={index} >
      <Comment data={comment}/>
      <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment.replies}/>
      </div>
  </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;
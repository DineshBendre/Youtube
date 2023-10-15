import React from 'react'

const commentsData = [
  {
    name: "Virat Kohli",
    text: "What a fantastic victory for India against Pakistan in the World Cup! 🏏🇮🇳",
    replies: [
      {
        name: "Sachin Tendulkar",
        text: "Absolutely, Virat! The team played brilliantly. 🙌",
        replies: [
          {
            name: "MS Dhoni",
            text: "Kohli and Rohit Sharma's partnership was outstanding! 🏏💥",
            replies: [

            ]
          },
        ]
      },
    ]
  },
  {
    name: "Rohit Sharma",
    text: "Hello, everyone! That was a memorable win for India. 🇮🇳🏆",
    replies: [
      {
        name: "Yuvraj Singh",
        text: "Rohit, your century set the tone for the victory! 💯👏",
        replies: [
          {
            name: "Harbhajan Singh",
            text: "Great performance by the bowlers too. Bhuvneshwar Kumar was exceptional! 🎯",
            replies: [
              {
                name: "Virender Sehwag",
                text: "A victory to remember for Indian cricket fans! 🙏🏏",
                replies: [

                ]
              },
            ]
          },
        ]
      },
    ]
  },
  {
    name: "Kapil Dev",
    text: "Wow, India's performance was outstanding! The World Cup is ours! 🏆🇮🇳",
    replies: [

    ]
  },
  {
    name: "Sourav Ganguly",
    text: "Incredible win! Indian cricket is on fire! 🔥🏏",
    replies: [

    ]
  },
  {
    name: "Ravindra Jadeja",
    text: "What a great all-round performance by the team! 🇮🇳💪",
    replies: [
      {
        name: "Anil Kumble",
        text: "Jadeja, your fielding and bowling were top-notch! 👌🏏",
        replies: [

        ]
      },
    ]
  },
  {
    name: "Sunil Gavaskar",
    text: "India's victory was a treat to watch. Well played, boys! 🏏🇮🇳",
    replies: [

    ]
  }

];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className='flex shadow-sm bg-gray-200 p-2 rounded-lg my-2'>
      <img className='w-7 h-7' alt='user' src='https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png'></img>
      <div className='px-3'>
        <p className='font-bold'>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className='pl-5 border border-l-black ml-5'>
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  )
}

export default CommentsContainer;

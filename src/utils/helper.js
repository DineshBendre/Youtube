var nameList = [
  'Aarav', 'Aanya', 'Aaditi', 'Aadi', 'Aahan', 'Aahana', 'Aakarsh', 'Aaliyah', 'Aarush', 'Aashka',
  'Abhinav', 'Advaita', 'Akshay', 'Akansha', 'Arya', 'Arjun', 'Amrita', 'Anaya', 'Amit', 'Alisha',
  'Bhavya', 'Bhuvan', 'Chaitanya', 'Charu', 'Dhruv', 'Diya', 'Daksh', 'Ekta', 'Esha', 'Faisal',
  'Gautam', 'Geetika', 'Hritik', 'Harshita', 'Ishaan', 'Ishika', 'Jai', 'Jasmine', 'Kabir', 'Kavita',
  'Lakshay', 'Leela', 'Manan', 'Mira', 'Naman', 'Nandini', 'Ojas', 'Oviya', 'Parth', 'Payal',
  'Qamar', 'Qadira', 'Raghav', 'Rashmi', 'Samarth', 'Saumya', 'Tanish', 'Tanya', 'Utkarsh', 'Uma',
  'Varun', 'Vanya', 'Veer', 'Vrinda', 'Yash', 'Yamini', 'Zayd', 'Zara', 'Aaditya', 'Aaradhya',
  'Aryan', 'Aishwarya', 'Bharat', 'Bhavna', 'Chirag', 'Charulata', 'Dhruv', 'Divya', 'Devansh', 'Ekisha',
  'Firoz', 'Ganga', 'Ganesh', 'Heena', 'Ishaan', 'Ishita', 'Jayant', 'Jaya', 'Kunal', 'Khushi',
  'Lakshman', 'Lavanya', 'Madhav', 'Meera', 'Nikhil', 'Nidhi', 'Om', 'Ojasvi', 'Pranav', 'Preeti',
  'Qaiser', 'Queenie', 'Rajat', 'Ritika', 'Sahil', 'Shreya', 'Tanuj', 'Trisha', 'Uday', 'Urvashi',
  'Vikram', 'Vaishnavi', 'Vedant', 'Vidya', 'Yuvan', 'Yashika', 'Zain', 'Zoya'
];

  export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
      };

      export function makeRandomMessage() {
        const cricketComments = [
          "Remember that historic India-Pakistan match in 2007? What a win!",
          "Kohli's masterclass in the 2015 World Cup against Pakistan was legendary.",
          "Sachin's iconic innings against Pakistan is still talked about.",
          "That thrilling India-Pakistan T20 final in 2007 - a historic win!",
          "The 2019 World Cup match against Pakistan was truly epic.",
          "Who can forget the 2011 World Cup semi-final victory?",
          "India's strong bowling attack has often outshone Pakistan.",
          "Yuvraj's six 6s against Pakistan is etched in cricket history.",
          "India's historic win in the 1985 World Championship is iconic.",
          "Dhawan's performances against Pakistan have been fantastic.",
          "India's batting prowess against Pakistan is unmatched.",
          "Rohit Sharma full power.",
          "2023 Virat's Knock 🔥",
          "India thrashed pakistan today",
        ];
      
        const randomIndex = Math.floor(Math.random() * cricketComments.length);
        return cricketComments[randomIndex];
      }
      
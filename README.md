![Home Page Screenshot](./src/Images/baseball_logo.jpeg)


# LearnBaseball ⚾

LearnBaseball is an interactive web application designed to teach baseball to new fans. It provides users with an engaging learning experience supported by AI, allowing them to explore the rules of the game, chat with an AI baseball expert, and test their knowledge through quizzes. Multi-language support ensures accessibility for a global audience.

---

## **Inspiration** ✨

Baseball is one of the most popular sports globally, yet billions of people have little to no understanding of how to play the game. Many new fans find it challenging to learn this amazing sport. LearnBaseball was created to help new fans learn baseball interactively with AI, from beginner to advanced levels, offering them a seamless and fun experience.

---
## **Features** ⚙️  

### **1. Interactive Rules of Baseball** 📖  
- The homepage lists essential rules of baseball.  
- Users can learn the rules in an interactive manner.  
- Each rule has an AI support option powered by Google Cloud’s Gemini API, allowing users to:  
  - Ask questions about the specific rule. 🤔  
  - Get answers to general baseball-related queries. ⚾  

### **2. MLB Baseball Videos** 🎥  
- Users can watch the latest MLB baseball videos directly from MLB’s YouTube channel within the app.  

### **3. AI Chat** 💬  
- A dedicated chat page where users can:  
  - Discuss anything about baseball with the AI baseball expert.  
  - Get guidance tailored for beginners, making learning personalized and engaging. 👍  
  
### **4. Learn Baseball History** 📜  
- A dedicated History page to explore the origins and growth of baseball.  
- Users can ask AI about historical facts, milestones, and trivia to deepen their understanding.  

### **5. Baseball Quiz** ❓  
- Test your knowledge of baseball with our quiz feature:  
  - AI asks baseball-related questions with four possible answers.  
  - Users choose the correct answer, and AI evaluates their response.  
  - The quiz session consists of 10 questions per round.  
  - Features include:  
    - Progress tracking: Users can see how many questions are left. 📈  
    - Score tracking: Users can view the number of correct answers. 💯  
    - High score display: Track the best quiz performance. 🏆  
  - All quiz data is saved in local storage, ensuring persistence across sessions.  

### **6. Multi-Language Support** 🌐  
- The app supports the following languages:  
  - English (default)  
  - French  
  - German  
  - Spanish  
  - Hindi  
  - Arabic  
  - Urdu  
- Users can select their preferred language, and the entire website content is translated dynamically. 
- Translation is implemented using the `i18next` npm package.  

---

## **Technologies Used** 🛠️

- **Frontend:** React.js, Bootstrap (for styling and responsive design)
- **AI Integration:** Google Cloud Gemini API
- **State Management:** React Hooks
- **Localization:** i18next
- **Storage:** LocalStorage (for quiz data persistence)

---

## **How to Run the Project** 🚀

1. Clone the repository:
   ```bash
   git clone https://github.com/shanali10/LearnBaseball.git
   ```
2. Navigate to the project directory:
   ```bash
   cd LearnBaseball
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```
5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

---

## **Add API Key** 🤖

To use this application, you need to configure your API key. Follow these steps:

1. Create a file named `.env.local` in the root directory of the project.
2. Add the following line to the `.env.local` file:

   ```plaintext
   API_KEY="YOUR_API_KEY"

---

## **Usage Instructions** 💡

1. Visit the homepage to learn the essential rules of baseball interactively.
2. Use the AI support option to ask questions related to rules or baseball in general.
3. Navigate to the Chat page to interact with the AI baseball expert.
4. Test your knowledge in the Quiz section and track your progress.
5. Choose your preferred language from the language selector for a personalized experience.

---

## **Screenshots** 📸

![Home Page Screenshot](./src/Screenshots/home_screenshot.png.png)
![Rules Section Screenshot](./src/Screenshots/rules_screenshot.png.png)
![Rules Chat Screenshot](./src/Screenshots/gameplay_screenshot.png.png)
![Multi Language Screenshot](./src/Screenshots/rule_chat_screenshot.png.png)
![Chat Page Screenshot](./src/Screenshots/general_chat_screenshot.png.png.png)
![Quiz Page Screenshot](./src/Screenshots/history_screenshot.png.png)
![Quiz Page Screenshot](./src/Screenshots/quiz_screenshot.png.png.png)
![Quiz Page Screenshot](./src/Screenshots/multi_language_screenshot.png.png.png)

---

## **Future Enhancements** 🔮

- Add more languages for broader accessibility.
- Include more advanced baseball concepts in the quiz.
- Expand AI features to include tips on playing techniques and strategies.
- Integrate user authentication for personalized profiles and data tracking.

---

Contributions are welcome! If you’d like to contribute, please follow these steps:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## **License** 📜

This project is licensed under the [MIT License](LICENSE).

---

## **Contact** 📧

For any queries or feedback, please reach out at:
- **Email:** shanalimughal430@gmail.com
- **GitHub:** [shanali10](https://github.com/shanali10)
- **Website:** [LearnBaseball](https://learnbaseball.firebaseapp.com)

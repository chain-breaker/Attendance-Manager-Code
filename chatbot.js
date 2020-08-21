import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import data from './data.json';
import { dialogflowConfig } from './config';

const BOT_USER = {
	_id: 2,
	name: 'CLASSMATE',
	avatar: 'https://image.shutterstock.com/image-vector/bot-icon-chatbot-sign-design-260nw-737931937.jpg'
};

class Chatbot extends Component {
	state = {
		messages: [
			{
				_id: 1,
				text: `HI, I am your classmate bot, how can I help you?`,
				createdAt: new Date(),
				user: BOT_USER
			}
		]
	};

	componentDidMount() {
		Dialogflow_V2.setConfiguration(
			dialogflowConfig.client_email,
			dialogflowConfig.private_key,
			Dialogflow_V2.LANG_ENGLISH_US,
			dialogflowConfig.project_id
		);
	}

	handleResponse(result) {
		console.log(result);
		let text = result.queryResult.fulfillmentMessages[0].text.text[0];
		
			if(result.queryResult.intent.displayName == "Timetable"){
				for(var i=0;i< data.length;i++ ){
					if(data[i].id == result.queryResult.parameters.reqtype && data[i].semester == result.queryResult.parameters.Semester && data[i].Branch == result.queryResult.parameters.branch)
				      text=data[i].image;
				}
			}
		
	//	let payload = result.queryResult.webhookPayload;
		this.showResponse(text,result);
	}

  showResponse(text,result) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER
    };

   if(result.queryResult.intent.displayName == "Timetable"){
      msg.text = "Here you go";
      msg.image = text;
	}
	console.log(text);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg])
    }));
  }

	onSend(messages = []) {
		this.setState(previousState => ({
			messages: GiftedChat.append(previousState.messages, messages)
		}));

		let message = messages[0].text;
		Dialogflow_V2.requestQuery(
			message,
			result => this.handleResponse(result),
			error => console.log(error)
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<GiftedChat
					messages={this.state.messages}
					onSend={messages => this.onSend(messages)}
					user={{
						_id: 1
					}}
				/>
			</View>
		);
	}
}

//

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Chatbot;
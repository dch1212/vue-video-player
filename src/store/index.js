import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'

Vue.use(Vuex)

const formateTime = function(milliseconds) {
	const durationObj = moment.duration(milliseconds);
	const minutes = durationObj.minutes();
	const seconds = durationObj.seconds();

	let formateStr = '';

	if (minutes && minutes > 0){
		formateStr += (minutes >= 10) ? minutes : '0'+minutes;
		formateStr += '\' ';
	}
	formateStr += (seconds >= 10) ? `${seconds}"` :`0${seconds}"` ;


	return formateStr;

}

const state = {
	video:{},
	relateVideo:{},
	videoComment:{},

}


const actions = {

}

const mutations = {
	GET_VIDEO_INFO_SUCCESS(state,res){
		res.data.time = formateTime(res.data.duration * 1000);
		state.video = res.data;

	},
	GET_RELATE_VIDEO_LIST_SUCCESS(state,res){
		let data = res.data.videoList;
		data.map((video)=>{
			video.time = formateTime(video.duration * 1000);
		});
		state.relateVideo = data;
	},
	GET_VIDEO_COMMENT_SUCCESS(state,res){
		let data = res.data.replyList;
		data.map((reply,index)=>{
			reply.time = moment(reply.createTime).format('YYYY-MM-DD HH:m');	
			reply.avatar = reply.user.avatar;
			reply.uid = reply.user.uid;
			reply.userName = reply.user.nickname;
			if (index === data.length-1)	{
				reply.lasted = true;
			}		
		});
		state.videoComment = data;
	},


}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})

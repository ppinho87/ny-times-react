import axios from 'axios';

const URL ='https://api.nytimes.com/svc/search/v2/articleSearch.json';
const KEY = '7cb5c742e59843c1aacaa55d3c68de3f';

export default {
	getData(search){
		return axios.get(`${URL}?q=${search}&apit-key=${KEY}`);
	},
	getSavedArticles(){
		return axios.get("/api/articles");
	},
	saveArticles(Article){
		return axios.post("api/articles", Article)
	},
	deleteArticle(id) {
		return axios.delete("api/articles/" + id);
	}
};
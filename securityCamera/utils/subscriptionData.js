let subscriptionData = null;

const getSubscription = () => subscriptionData;
const setSubscription = (value) => subscriptionData = value;


module.exports = {
	getSubscription,
	setSubscription
};
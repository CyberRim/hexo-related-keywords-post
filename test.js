/*jshint esversion: 6 */
function testNodeHanlp() {
	'use strict';
	const Hanlp = require("node-hanlp");
	//分词库初始化及配置
	const HanLP = new Hanlp({
		CustomDict: true, //使用自定义词典
		NameRecognize: true, //中国人名识别
		TranslatedNameRecognize: true, //音译人名识别
		JapaneseNameRecognize: true, //日本人名识别
		PlaceRecognize: true, //地名识别
		OrgRecognize: true //机构名识别
	});
	const text="9秒83的成绩，也让人们无比期待两个小时后的男子百米决赛。而在半决赛结束后，有欧洲机构开出的最新男子百米决赛夺冠指数上，苏炳添以1：5.0排名第二位，排名第一的是半决赛与他同组、同样跑出9秒83的美国选手贝克尔，他的夺冠指数为1：2.5。半决赛上，苏炳添以千分之二秒优势击败了贝克尔（9秒827比9秒829），可见“苏神”已经成为了夺冠大热门！但也有网友理智地指出：“苏神已经把半决赛当成决赛在跑了，而其它小组的对手确实有的是留了力的。苏神的体能消耗是巨大的，毕竟是32岁的年龄了，要在短短两个小时后把状态恢复到最佳层面不太现实，所以大家平常心对待。”有网友也表示，“苏神”决赛跑成什么样都不重要了，“进入男子百米决赛，在我心目中等于拿到金牌，我们已经满足了。”同样，也有网友在期待苏炳添能够创造更大的奇迹——男子百米飞人大战中夺牌，甚至是夺金，“苏炳添9秒83的成绩已经可以在雅典奥运会、悉尼奥运会、亚特兰大奥运会、巴塞罗那奥运会等绝大多数奥运会百米大战中夺冠了，为什么不能期待一下呢？”由于是半决赛所有选手中的第一名，苏炳添决赛被安排在第六条跑道上——这是夺冠热门选手的待遇！有网友感慨说：“一个中国人，站在奥运会男子百米跑道的第六道上，下一次出现这样的一幕不知道又要等待多少年了。”不过，苏炳添也面临巨大的竞争压力。虽然个人最好成绩9秒69的牙买加选手布莱克、个人最好成绩9秒77的美国选手布罗梅尔都在半决赛上被淘汰，但在进入决赛的其他7名选手中，和苏炳添同组晋级的美国选手贝克尔、意大利选手雅各布斯都在半决赛中显示出强悍的后半程加速能力。另外两个小组中晋级的英国选手休斯、美国选手克利在半决赛中也并未全力冲刺，但同样跑进了10秒大关。";
	let words = HanLP.Keyword(text, 10);
	console.log(words);
}
testNodeHanlp();
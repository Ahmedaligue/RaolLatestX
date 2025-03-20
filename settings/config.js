const fs = require('fs');

global.d = new Date();
global.calender = d.toLocaleDateString('id');

//================= { SETTINGS } =================\\
global.prefa = ['', '!', '.', ',', '🐤', '🗿'];
global.owner = '212625457341';
global.email = 'aligueahmed6@gmail.com;
global.ownNumb = '';
global.NamaOwner = '';
global.sessionName = 'session';
global.namabot = 'AHMED ALIGUE';
global.author = '';
global.packname = '';
global.yt = '';

//================= { MASSAGE } =================\\
global.mess = {
    ingroup: 'جرب فالغروب',
    owner: 'هدا الامر للمطوى',
    premium: 'هدا الامر لمستخدمي بريم',
    seller: 'لا يمكنك استخدام الامر لسبب ما',
    usingsetpp: 'تستووووو',
    wait: 'انتظر 🕙',
    limit: 'لم يعد لديك عملات ⏱️'
};

//==================================\\

global.autOwn = 'req(62-8S57547ms11).287p';

//==================================\\

let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
    delete require.cache[file];
    require(file);
});

//==================================\\

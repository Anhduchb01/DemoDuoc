const mongoose = require("mongoose");
const contacts = mongoose.model("Contacts");
const nodemailer = require("nodemailer");
const { transports } = require("winston");
const ENV = require("./ENV");

async function getContactById(id) {
    let result = await contacts.findByIdAndUpdate(
        {
            _id: id,
        },
        { status: false }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function markAsRead(arrayId) {
    let result = await contacts.updateMany(
        { _id: { $in: arrayId } },
        { $set: { status: false } },
        { multi: true }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function markAsUnRead(arrayId) {
    let result = await contacts.updateMany(
        { _id: { $in: arrayId } },
        { $set: { status: true } },
        { multi: true }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function moveToTrash(arrayId) {
    let result = await contacts.updateMany(
        { _id: { $in: arrayId } },
        { $set: { statusTrash: true } },
        { multi: true }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function moveToSpam(arrayId) {
    let result = await contacts.updateMany(
        { _id: { $in: arrayId } },
        { $set: { statusSpam: true } },
        { multi: true }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function DeletePermanentlyTrash(arrayId) {
    let result = await contacts.deleteMany(
        { _id: { $in: arrayId } },
        { multi: true }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function ReviveMailTrash(arrayId) {
    let result = await contacts.updateMany(
        { _id: { $in: arrayId } },
        { $set: { statusTrash: false } },
        { multi: true }, (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
    return result;
}

async function getCountUnreadContact() {
    try {
        let inbox = await contacts.count({
            $and: [{ statusSpam: false }, { statusTrash: false }, { status: true }],
        });
        let spam = await contacts.count({
            $and: [{ statusSpam: true }, { statusTrash: false }, { status: true }],
        });
        let trash = await contacts.count({
            $and: [{ statusTrash: true }, { status: true }],
        });
        return arrCountList = [inbox, spam, trash];
    } catch (error) {
        console.log("Error in retrieving employee list :" + error);
        return false;
    }
}

async function deleteTrashAfterDays(day) {
    console.log("start clean!");
    let result = await contacts.deleteMany(
        { $and: [{ statusTrash: true }, { timeCreateContacts: { $lte: day } }] },
        (err, docs) => {
            if (!err) {
                return docs;
            } else {
                return false;
            }
        }
    );
}

async function getListContactNotification() {
    var result = await contacts
        .find(
            {
                $and: [{ statusSpam: false }, { statusTrash: false }, { status: true }],
            },
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    console.log("Error in retrieving employee list :" + err);
                    return false;
                }
            }
        )
        .sort({ timeCreateContacts: -1 })
        .limit(5);
    return result;
}

async function getCountNotification() {
    var result = await contacts
        .count(
            {
                $and: [{ statusSpam: false }, { statusTrash: false }, { status: true }],
            },
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    console.log("Error in retrieving employee list :" + err);
                    return false;
                }
            }
        )
    return result;
}


async function getListContactSpam(data) {
    let page = data.page;
    let limit = 10;
    let keyword = data.key || "";
    var arrData = [];
    let total = await contacts
        .count({
            $and: [
                { statusSpam: true },
                { statusTrash: false },
                {
                    $or: [
                        { customerName: { $regex: keyword, $options: "i" } },
                        { customerSub: { $regex: keyword, $options: "i" } },
                        { customerEmail: { $regex: keyword, $options: "i" } },
                        { customerPhone: { $regex: keyword, $options: "i" } },
                        { customerMsg: { $regex: keyword, $options: "i" } },
                    ],
                },
            ],
        });
    let maxpage = Math.ceil(total / limit);
    if (page > maxpage) page = maxpage;
    if (page < 1) page = 1;
    let result = await contacts
        .find(
            {
                $and: [
                    { statusSpam: true },
                    { statusTrash: false },
                    {
                        $or: [
                            { customerName: { $regex: keyword, $options: "i" } },
                            { customerSub: { $regex: keyword, $options: "i" } },
                            { customerEmail: { $regex: keyword, $options: "i" } },
                            { customerPhone: { $regex: keyword, $options: "i" } },
                            { customerMsg: { $regex: keyword, $options: "i" } },
                        ],
                    },
                ],
            },
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    return false;
                }
            }
        )
        .sort({ timeCreateContacts: -1 })
        .limit(limit)
        .skip(page > 0 ? (page - 1) * limit : 0);
    arrData = [result, total, page, limit];
    return arrData;
}

async function getListContactInbox(data) {
    let page = data.page;
    let limit = 10;
    let keyword = data.key || "";
    var arrData = [];
    let total = await contacts
        .count({
            $and: [
                { statusSpam: false },
                { statusTrash: false },
                {
                    $or: [
                        { customerName: { $regex: keyword, $options: "i" } },
                        { customerSub: { $regex: keyword, $options: "i" } },
                        { customerEmail: { $regex: keyword, $options: "i" } },
                        { customerPhone: { $regex: keyword, $options: "i" } },
                        { customerMsg: { $regex: keyword, $options: "i" } },
                    ],
                },
            ],
        });
    let maxpage = Math.ceil(total / limit);
    if (page > maxpage) page = maxpage;
    if (page < 1) page = 1;
    let result = await contacts
        .find(
            {
                $and: [
                    { statusSpam: false },
                    { statusTrash: false },
                    {
                        $or: [
                            { customerName: { $regex: keyword, $options: "i" } },
                            { customerSub: { $regex: keyword, $options: "i" } },
                            { customerEmail: { $regex: keyword, $options: "i" } },
                            { customerPhone: { $regex: keyword, $options: "i" } },
                            { customerMsg: { $regex: keyword, $options: "i" } },
                        ],
                    },
                ],
            },
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    return false;
                }
            }
        )
        .sort({ timeCreateContacts: -1 })
        .limit(limit)
        .skip(page > 0 ? (page - 1) * limit : 0);
    arrData = [result, total, page, limit];
    return arrData;
}

async function getListContactTrash(data) {
    let page = data.page;
    let limit = 10;
    let keyword = data.key || "";
    var arrData = [];
    let total = await contacts
        .count({
            $and: [
                { statusTrash: true },
                {
                    $or: [
                        { customerName: { $regex: keyword, $options: "i" } },
                        { customerSub: { $regex: keyword, $options: "i" } },
                        { customerEmail: { $regex: keyword, $options: "i" } },
                        { customerPhone: { $regex: keyword, $options: "i" } },
                        { customerMsg: { $regex: keyword, $options: "i" } },
                    ],
                },
            ],
        });
    let maxpage = Math.ceil(total / limit);
    if (page > maxpage) page = maxpage;
    if (page < 1) page = 1;
    let result = await contacts
        .find(
            {
                $and: [
                    { statusTrash: true },
                    {
                        $or: [
                            { customerName: { $regex: keyword, $options: "i" } },
                            { customerSub: { $regex: keyword, $options: "i" } },
                            { customerEmail: { $regex: keyword, $options: "i" } },
                            { customerPhone: { $regex: keyword, $options: "i" } },
                            { customerMsg: { $regex: keyword, $options: "i" } },
                        ],
                    },
                ],
            },
            (err, docs) => {
                if (!err) {
                    return docs;
                } else {
                    return false;
                }
            }
        )
        .sort({ timeCreateContacts: -1 })
        .limit(limit)
        .skip(page > 0 ? (page - 1) * limit : 0);
    arrData = [result, total, page, limit];
    return arrData;
}

async function SendMail(mainOptions){
  var transporter = nodemailer.createTransport({
    host: ENV.HOST_MAIL,
    port: ENV.PORT_SEND_MAIL,
    secure: true,
    auth: {
      user: ENV.USER_NAME_MAIL, 
      pass: ENV.PASSWORD_MAIL, 
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
    let result = await transporter.sendMail(mainOptions);
    return result;
}

module.exports = {
    getContactById: getContactById,
    markAsRead: markAsRead,
    markAsUnRead: markAsUnRead,
    moveToTrash: moveToTrash,
    moveToSpam: moveToSpam,
    getListContactSpam: getListContactSpam,
    getListContactTrash: getListContactTrash,
    getListContactInbox: getListContactInbox,
    DeletePermanentlyTrash: DeletePermanentlyTrash,
    ReviveMailTrash: ReviveMailTrash,
    getCountUnreadContact: getCountUnreadContact,
    deleteTrashAfterDays: deleteTrashAfterDays,
    GetListContactNotification: getListContactNotification,
    GetCountNotification: getCountNotification,
    SendMail: SendMail,
}
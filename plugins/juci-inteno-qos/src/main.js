//! Author: Reidar Cederqvist <reidar.cederqvist@gmail.com>

UCI.$registerConfig("qos");
UCI.qos.$registerSectionType("classify", {
	"target":	{ dvalue:'Normal', type: String },
	"ports":	{ dvalue: '', type: String },
	"comment":	{ dvalue: '', type: String },
	"dscp":		{ dvalue: '', type: String },
	"srchost":	{ dvalue: '', type: String },
	"dsthost":	{ dvalue: '', type: String },
	"proto":	{ dvalue: '', type: String }
});
UCI.qos.$registerSectionType("classgroup", {
	"classes":	{ dvalue: 'Priority Express Normal Bulk', type: String },
	"default": 	{ dvalue: 'Normal', type: String }
});

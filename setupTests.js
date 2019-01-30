require('dotenv').config();
const db = require('./db/knexConection');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

global.chai = chai;
global.expect = expect;
global.sinon = sinon;
global.db = db;

function knexStubs() {
  global.selectStub = sinon.stub(db, 'select').returns(db);
  global.returningStub = sinon.stub(db, 'returning').returns(db);
  global.trxStub = sinon.stub(db, 'transacting').returns(db);
  global.whereStub = sinon.stub(db, 'where').returns(db);
  global.whereInStub = sinon.stub(db, 'whereIn').returns(db);
  global.andWhereStub = sinon.stub(db, 'andWhere').returns(db);
  global.updateStub = sinon.stub(db, 'update').returns(db);
  global.tableStub = sinon.stub(db, 'table').returns(db);
  global.rawStub = sinon.stub(db, 'raw').returns(db);
  global.firstStub = sinon.stub(db, 'first').returns(db);
  global.fromStub = sinon.stub(db, 'from').returns(db);
  global.joinStub = sinon.stub(db, 'join').returns(db);
  global.innerJoinStub = sinon.stub(db, 'innerJoin').returns(db);
  global.leftJoinStub = sinon.stub(db, 'leftJoin').returns(db);
  global.orderByStub = sinon.stub(db, 'orderBy').returns(db);
  global.limitStub = sinon.stub(db, 'limit').returns(db);
  global.countStub = sinon.stub(db, 'count').returns(db);
  global.whereRawStub = sinon.stub(db, 'whereRaw').returns(db);
  global.insertStub = sinon.stub(db, 'insert').returns(db);
  global.groupByStub = sinon.stub(db, 'groupBy').returns(db);
  global.distinctStub = sinon.stub(db, 'distinct').returns(db);
  global.andWhereBetweenStub = sinon.stub(db, 'andWhereBetween').returns(db);
  global.unionStub = sinon.stub(db, 'union').returns(db);
  global.unionAllStub = sinon.stub(db, 'unionAll').returns(db);
  global.whereExistsStub = sinon.stub(db, 'whereExists').returns(db);
  global.orWhereStub = sinon.stub(db, 'orWhere').returns(db);
  global.whereNullStub = sinon.stub(db, 'whereNull').returns(db);
}

function restoreKnexStubs() {
  global.selectStub.restore();
  global.returningStub.restore();
  global.trxStub.restore();
  global.whereStub.restore();
  global.whereInStub.restore();
  global.andWhereStub.restore();
  global.updateStub.restore();
  global.tableStub.restore();
  global.rawStub.restore();
  global.firstStub.restore();
  global.fromStub.restore();
  global.joinStub.restore();
  global.innerJoinStub.restore();
  global.leftJoinStub.restore();
  global.orderByStub.restore();
  global.limitStub.restore();
  global.countStub.restore();
  global.whereRawStub.restore();
  global.insertStub.restore();
  global.groupByStub.restore();
  global.distinctStub.restore();
  global.andWhereBetweenStub.restore();
  global.unionStub.restore();
  global.unionAllStub.restore();
  global.whereExistsStub.restore();
  global.orWhereStub.restore();
  global.whereNullStub.restore();
}

global.knexStubs = knexStubs;
global.restoreKnexStubs = restoreKnexStubs;

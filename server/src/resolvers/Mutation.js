const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {APP_SECRET, getUserId} = require('../utils');

async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 20);
  const user = await context.prisma.user.create({ data: { ...args, password } })

  return {
    user,
  }
}


async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({ where: { email: args.email } })
  if (!user) {
    throw new Error('No such user found');
  }

  const passwordValid = await bcrypt.compare(args.password, user.password)
  if (!passwordValid) {
    throw new Error('Invalid Password');
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

module.exports = {
  signup,
  login,
}
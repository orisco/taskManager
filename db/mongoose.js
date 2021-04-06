// mongodb connection 

const mongoose = require("mongoose")

mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://orisayag:Os6852265@cluster0.1iwcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true,  useUnifiedTopology: true }).then(() => {
  console.log("connected to db successfully")
}).catch((e) => {
console.log("error connecting to db")
console.log(e)
})


// prevent deprecation warnings
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', true)
mongoose.set('useUnifiedTopology', true)


module.exports = {
  mongoose
}
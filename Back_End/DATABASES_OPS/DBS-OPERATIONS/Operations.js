import mysql from 'mysql2'

const connection = mysql.createPool({
    host : '127.0.0.1',
    user : 'root',
    password : '123456789',
    database : 'online_education'

}).promise()

async function readCourses() {
    
    const output = await connection.query("select * from courses")
    return output[0]

}
async function readCourseById(id) {
    
    const output = await connection.query("select * from courses where id =" + id)
    return output[0]

}
async function insertCourses(title, tutor) {
    
    const output = await connection.query("INSERT INTO courses (title, tutor) VALUES ('" + title + "', '" + tutor + "')");
    return output;
}
// const ans1 = await readCourses()
// console.log(ans1)
// const ans2 = await readCourseById(1)
// console.log(ans2)
const ans3 = await insertCourses('Express', 'Raj Kari')
console.log(ans3)



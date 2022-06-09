const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = express.Router();


const mysqlConnection = require('../database.js');

// get all employees list
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * from employees', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }

    });
});

// get an particular employee data ( with id)
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id)
    mysqlConnection.query('SELECT * from employees WHERE id = ?', [id], (err,
        rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }

    });
});

// save or update an particular employee trough id,
// with id 0 this save the data employee, 
router.post('/', (req, res) => {
    const { id, name, value } = req.body;
    const query = `
    CALL employeeAddOrEdit (?,?,?);
    `;
    mysqlConnection.query(query, [id, name, value], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employeed Saved' });
        } else {
            console.log(err);
        }

    });


});

// with id X this update the data employee.( select employee with the same id)
router.put('/', (req, res) => {
    const { id, name, value } = req.body;
    const query = `CALL employeeAddOrEdit(?,?,?)`;
    mysqlConnection.query(query, [id, name, value], (err, rows, fields) => {
        if (!err) {
            res.json({ status: 'Employee Updated' })
        } else {
            console.log(err);
        }

    });
});

// with id X this delete the data employee.( select employee with the same id)
router.delete('/', (req, res) => {
    const { id } = req.body;
    console.log(id);
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err,
        rows, fields) => {
        if (!err) {
            res.json({ status: 'Employee Deleted' });
        } else {
            console.log(err);
        }
    });
});

module.exports = router;
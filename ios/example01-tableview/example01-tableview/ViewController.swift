//
//  ViewController.swift
//  example01-tableview
//
//  Created by KK on 2017/11/3.
//  Copyright © 2017年 kelly. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITableViewDelegate, UITableViewDataSource{

    @IBOutlet weak var tableView: UITableView!
    var data = ["john", "david", "tom", "bob"]
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    
    func numberOfSections(in tableView: UITableView) -> Int {
        return 1
    }

    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return data.count;
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell  = tableView.dequeueReusableCell(withIdentifier: "cell", for: indexPath)
        cell.textLabel?.text = data[indexPath.row]
        print("index cell")
        return cell
    }

    @IBAction func addStudent(_ sender: Any) {
        let alert = UIAlertController(title: "Add student", message: "Enter student info", preferredStyle: .alert)
        
        let save = UIAlertAction(title: "Save", style: .default) { (UIAlertAction) in
            let student = alert.textFields?[0].text
            self.data.append(student!)
            self.tableView.reloadData()
        }
        
        let cacel = UIAlertAction(title: "Cancel", style: .default, handler: nil)
        
        alert.addTextField(configurationHandler: nil)
        
        alert.addAction(cacel)
        alert.addAction(save)
        
        self.present(alert, animated: true, completion: nil)
    }
}


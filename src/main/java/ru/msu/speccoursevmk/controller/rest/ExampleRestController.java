package ru.msu.speccoursevmk.controller.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/example")
public class ExampleRestController {

    /*
    CREATE TABLE IF NOT EXISTS examples (
        id      SERIAL,
        name    TEXT,
        some_id INT,
        date    TIMESTAMPTZ
    )
    * */

    @Autowired JdbcTemplate template;

    @GetMapping(value = "/", produces = "application/json")
    private ResponseEntity<?> getList() {
        String sSQL = "SELECT * FROM obj_users";
        List<Map<String, Object>> maps = template.queryForList(sSQL);
        return ResponseEntity.ok(maps);
    }

    @PostMapping(value = "/add", produces = "application/json")
    private ResponseEntity<?> addToList(@RequestBody List<Map<String, Object>> list) {
        for (Map<String, Object> data : list) {
            String sSQL = "INSERT INTO obj_users (login, password, fio, role) VALUES (?, ?, ?, ?)";
            template.update(sSQL, data.get("login"), data.get("password"), data.get("fio"), data.get("role"));
        }
        return ResponseEntity.ok().build();
    }
}

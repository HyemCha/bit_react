package data.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.MemoDto;
import data.service.MemoService;

@RestController
@CrossOrigin
@RequestMapping("/memo")
public class MemoController{

    @Autowired
    private MemoService memoService;

    @PostMapping("/insert")
    public void insertMemo(@RequestBody MemoDto dto){
        memoService.insertMemo(dto);
    }

    @GetMapping("/list")
    public List<MemoDto> list(){
        return memoService.getMemoDatas();
    }

    @DeleteMapping("/delete")
    public void delete(@RequestParam int num, HttpServletRequest request){
        memoService.deleteData(num);
    }
} 
package data.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import data.dto.MemberDto;
import data.service.MemberService;

@RestController
@CrossOrigin
@RequestMapping("/member")
public class MemberController {
    
    @Autowired
    private MemberService memberService;

    @PostMapping("/insert")
    public void insert(@RequestBody MemberDto dto){
        System.out.println("insert>>"+dto.getEmail());
        memberService.insertMember(dto);
    }

    @GetMapping("/idcheck")
    public int idCheck(@RequestParam String id){
        return memberService.idCheck(id);
    }

    @PostMapping("/login")
    public int login(@RequestBody MemberDto dto){
        System.out.println("login>>" + dto.getId());
        return memberService.loginCheck(dto.getId(),dto.getPass()); //모두 맞으면 1, 틀리면 0이 반환
    }

    @GetMapping("/getName")
    public String getName(@RequestParam String id){
        return  memberService.getName(id);
    }
}

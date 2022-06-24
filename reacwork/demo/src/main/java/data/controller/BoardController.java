package data.controller;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Vector;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import data.dto.BoardDto;
import data.service.BoardService;
import util.FileUtil;

@RestController
@CrossOrigin
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    String photoName; //리액트에서 업로드한 이미지명(변경된 이미지명일 수도 )

    //리액트에서 이미지 업로드시 save에 저장 후 이미지명 반환
    @PostMapping("/upload")
    public String fileUpload(@RequestParam MultipartFile uploadFile,
            HttpServletRequest request){
        
        String fileName = uploadFile.getOriginalFilename();
        //업로드 할 폴더 위치
        String path = request.getServletContext().getRealPath("/save");

        //직전에 업로드한 이미지 삭제하기
        File file = new File(path + "/" + photoName);
        //만약 존재할 경우 삭제
        if(file.exists()){
            file.delete();
        }

        //파일명 변경
        FileUtil fileUtil = new FileUtil();
        photoName = fileUtil.changeFileName(fileName);
        System.out.println("fileName = " + fileName + "=>" + photoName);
        System.out.println("path = " + path);

        //save 폴더에 업로드
        try {
            uploadFile.transferTo(new File(path + "/" + photoName));
        } catch (IllegalStateException | IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return photoName;
    }

    @GetMapping("/inesrt")
    public void insert(@RequestBody BoardDto dto){
        dto.setPhoto(photoName);
        boardService.insertBoard(dto);
    }

    @GetMapping("/detail")
    public BoardDto detail(@RequestParam int num){
        //조회수 증가
        boardService.updateReadCount(num);
        //dto 얻기
        return boardService.getData(num);
    }

    @GetMapping("/alllist")
    public List<BoardDto> getAllList(){
        return boardService.getAllDatas();
    }

    @GetMapping("/pagelist")
    public Map<String,Object> getPageList(
        @RequestParam(defaultValue = "1") int currentPage
    ){
        System.out.println("currentPage=" + currentPage);
        int totalCount;//총갯수
        int perPage=2;//한 페이지당 보여질 글의 갯수
        int perBlock=5;//한(밑에 페이지 숫자)블럭당 보여질 페이지수
        int totalPage; //총페이지수
        int startNum;//한페이지에서 보여질 시작 글번호
        int startPage;//한블럭에서 보여질 시작 페이지 번호
        int endPage;//한블럭에서 보여질 끝 페이지 번호
        int no;//각페이지당 보여질 시작번호
        
        //총글의갯수를 구한다
        totalCount=boardService.getTotalCount();
        //총페이지수를 구한다
        //밑에두개 같은거임
        totalPage=totalCount/perPage+(totalCount%perPage==0?0:1);
        //totalPage=(int)Math.ceil((double)totalCount/perPage);//무조건올림
        
        //각블럭 시작페이지 (한블럭당 5개일경우)
        //1,6,11,,,(currentPage가 1~5일때는 1,  6~10일땐 6
        startPage=(currentPage-1)/perBlock*perBlock+1;
                
        //5,10,15....(currentPage가 1~5일때는 5,  6~10일땐 10
        endPage=startPage+perBlock-1;
        //문제점 : 마지막블럭은 마지막페이지까지만나와야함 
        if(totalPage<endPage) {
            endPage=totalPage;
        
            
        }
        //각 페이지에서 보여질 글의 시작번호 (mysql 은 0부터)오라클은1부터
        //한페이지당 3개일경우 1페이지:0, 2페이지:3, 3페이지:6;
        startNum=(currentPage-1)*perPage;
        //각 페이지당 보여질 시작번호
        no=totalCount-(currentPage-1)*perPage;
        //데이타 가져오기
        List<BoardDto> list= boardService.getPagingList(startNum, perPage);

        //출력할 페이지 번호
        Vector<Integer> parr = new Vector<>();
        for(int pp=startPage; pp<endPage; pp++){
            parr.add(pp);
        }

        //리턴할 Map에 필요한 변수들 넣기
        Map<String , Object> map = new HashMap<>();
        map.put("list", list);
        map.put("parr", parr);
        map.put("totalCount", totalCount);
        map.put("totalPage", totalPage);
        map.put("startPage", startPage);
        map.put("endPage", endPage);
        map.put("no", no);

        return map;
    }
}

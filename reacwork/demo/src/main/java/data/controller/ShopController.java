package data.controller;

import java.io.File;
import java.io.IOException;
import java.security.Provider.Service;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import data.dto.ShopDto;
import data.service.ShopService;
import util.FileUtil;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController //무조건 json리턴.aws에 백엔드 프론트 따로 등록해야 함. responsebody가 포함됨
@CrossOrigin //이거 쓰면 에러없이 접근 가능. spring framework 5 부터 됨. 도메인 다를 때 접근 가능하게 해줌
@RequestMapping("/shop")
public class ShopController {

    @Autowired
    private ShopService shopService;

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

    @PostMapping("/insert") //RequestBody; json형태의 데이터를 자바 클래스로 바꿔줌
    public void insertShop(@RequestBody ShopDto dto) {
        //업로드한 사진명
        dto.setPhoto(photoName);
        System.out.println(photoName);
        shopService.insertShop(dto);
        photoName=null;
    }
    
    @GetMapping("/list")
    public List<ShopDto> list(){
        return shopService.getShopDatas();
    }
    
    @GetMapping("/detail")
    public ShopDto detail(@RequestParam int num){
        return shopService.getData(num);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestParam int num, HttpServletRequest request){
        //save 경로 구하기
        String path = request.getServletContext().getRealPath("/save");

        //num에 해당한는 photo 얻기
        String photo = shopService.getData(num).getPhoto();

        //해당 경로에 파일이 존재할 경우 삭제
        File file = new File(path+"/"+photo);
        if(file.exists())
            file.delete();
        //db delete
        shopService.deleteShop(num);
    }

    @PostMapping("/update") //json으로 받으니까 requestBody로 받기
    public void update(@RequestBody ShopDto dto){
        //사진이 있을 경우 이미지명 넣기
        dto.setPhoto(photoName);
        shopService.updateShop(dto);
        photoName=null;
    }
    
}

import zipfile
import re
import sys

def extract_text(doc_path):
    try:
        with zipfile.ZipFile(doc_path) as z:
            xml_content = z.read('word/document.xml').decode('utf-8')
            # Extract paragraphs and remove xml tags
            text = re.sub(r'<w:p [^>]*>', '\n', xml_content)
            text = re.sub(r'<[^>]+>', '', text)
            with open('docx_extracted.txt', 'w', encoding='utf-8') as f:
                f.write(text)
        print("Success")
    except Exception as e:
        print("Error:", e)

extract_text('GIẢI VÔ ĐỊCH ĐUA GHE TRUYỀN THỐNG CỐ ĐÔ HUẾ 2026.docx')

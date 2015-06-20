<?php
   $faqsid = null;

   if(isset($_GET['faqsid']))
   {
      $faqsid = $_GET['faqsid'];
   }
   else
   {
      if(function_exists('faqsRedirectTo'))
      {
         faqs\faqsRedirectTo('admin.php?page=faqs-all-faqs');
      }
      else
      {
         die('Do not have sufficient permission to access page.');
      }
   }

   $wp_list_table = new faqs\FAQsQuestionsListTable($faqsid);

?>
<div class="wrap">
    <h2>
      FAQs        
      <a href="<?php print admin_url('admin.php?page=faqs-add-question&faqsid='. $faqsid); ?>" class="button-primary">Add Question</a>
    </h2>   
<?php
$wp_list_table->display();
?>

</div>